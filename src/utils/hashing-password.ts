import bcrypt from 'bcrypt'


export const hashingPassword = async (password: string): Promise<string> => {
    const salt = 10
    return await bcrypt.hash(password, salt)
}

export const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
    const verify = await bcrypt.compare(password, hash);
    return verify
}