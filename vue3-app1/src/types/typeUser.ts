// intarface od nasih podataka koje smo koristili
interface userType {
    id?: string,
    name: string,
    username: string,
    email: string,
    knownProgramLanguage?:any,
}
export default userType