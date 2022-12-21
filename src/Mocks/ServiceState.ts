
var progress = 0;


var statusInfo = "CHECKING";

var progressPID: number = -1;

export default function GetServiceState(triggererror?: boolean) {

    if (progressPID === -1) {
        progressPID = window.setInterval(() => {
            progress += 11;
            progress = +progress.toFixed(0);
            if (progress > 100 && statusInfo === "CHECKING") {
                statusInfo = "UPDATING";
                progress = 0;
            }

            if (progress > 100 && statusInfo === "UPDATING") {
                statusInfo = "INITIALIZED";
                progress = 0;
                window.clearInterval(progressPID);
            }
        }, 400);
    }

    return new Promise((res, rej) => {
        setTimeout(() => {
            if (triggererror) {
                rej({
                    error: {
                        name: "MyRandomErrorName",
                        code: 1231,
                        message: "asdfasdfaklsjdflkjqwelkrjql;kjl;1k2j3kl12 lk;12j3l ;k1j23kl ;jqkl;sdjakl; sdjakl;s djakl;sd "
                    },
                    running: false,
                    info_message: "Cannot Load data",
                    progress,
                    creation_attempt_timestamp: new Date().toJSON(),
                    update_attempt_timestamp: new Date().toJSON(),
                    state: "ERROR"
                })
            }
            res({
                error: null as Error | null,
                running: true,
                info_message: "Cargando base de datos...",
                progress,
                creation_attempt_timpestamp: undefined,
                update_attempt_timpestamp: undefined,
                state: statusInfo as "CHECKING" | "UPDATING" | "ERROR" | "INITIALIZED"
            })
        }, 300);
    });
}