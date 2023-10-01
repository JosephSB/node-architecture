import { compareSync, hashSync } from "bcryptjs";

export class bcryptAdapter {
    static hash(password: string): string {
        return hashSync(password);
    }

    static compare(password: string, hashed: string): boolean {
        return compareSync(password, hashed);
    }
}