import { bcryptAdapter } from "../../config";
import { UserModel } from "../../data/mongodb";
import { CustomError, LoginUserDto, RegisterUserDto, UserEntity } from "../../domain";
import { AuthDatasource } from "../../domain/datasources/auth.datasources";
import { UserMapper } from "../mappers/user.mapper";

type HashFunction = (password: string) => string;
type CompareFunction = (password: string, hashed: string) => boolean;

export class AuthDatasourceImpl implements AuthDatasource {

    constructor(
        private readonly hashPassword: HashFunction = bcryptAdapter.hash,
        private readonly comparePassword: CompareFunction = bcryptAdapter.compare,
    ){}


    async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
        const {email, password} = loginUserDto;

        try {
            const user = await UserModel.findOne({email})
            if(!user) throw CustomError.badRequest("User not exists");

            if(!this.comparePassword(password, user.password)) throw CustomError.badRequest("Invalid credentials");


            return UserMapper.userEntityFromObject(user);

        } catch (error) {
            if(error instanceof CustomError) throw error
            throw CustomError.internalServer();
        }
    }

    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const {name, email, password} = registerUserDto;

        try {
            const exists = await UserModel.findOne({email})
            if(exists) throw CustomError.badRequest("User already exists");

            // hash password

            const newUser = await UserModel.create({
                name: name,
                email: email,
                password: this.hashPassword(password),
            })

            await newUser.save();

            // map resp to own entity

            return UserMapper.userEntityFromObject(newUser);
        } catch (error) {
            if(error instanceof CustomError) throw error
            throw CustomError.internalServer();
        }
    }

}