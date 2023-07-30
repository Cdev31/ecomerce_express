

export interface ConfigEnv {
    env: string
    port: number
    db_url?: string
    db_e2e?: string
    jwtSecret: string
}