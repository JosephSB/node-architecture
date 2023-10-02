

export class LoginUserDto {
    private constructor(
        public email: string,
        public password: string
    ) {}
}