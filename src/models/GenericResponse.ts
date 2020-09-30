class GenericResponse {

    public status: number;
    public message: string | undefined;

    constructor(status: number, message?: string) {
        this.status = status;
        this.message = message;
    }

    public wasSuccessful(): boolean {
        return this.status === 200;
    }
}

export default GenericResponse