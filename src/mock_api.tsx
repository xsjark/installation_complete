// error: null as Error | null,
//     running: false,
//     info_message: "",
//    progress: 0,
//    creation_attempt_timpestamp: undefined,
//    update_attempt_timpestamp: undefined,
//    state: "CHECKING" as "CHECKING" | "UPDATING" | "ERROR" | "INITIALIZED"

export default async function getprogress(progress: number) {
    return new Promise<any>(resolve =>
            resolve({
                error: null,
                running: false,
                info_message: "hiya",
                progress: progress,
                creation_attempt_timestamp: undefined,
                update_attempt_timestamp: undefined,
                state: "CHECKING"
            }))
}