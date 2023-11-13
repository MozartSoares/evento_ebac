AOS.init()

const dataDoEvento = new Date("Dec 28, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date()
    const timeStampAtual = agora.getTime()
    
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
                        //ms- seg * min * h * dia (% - retorna o resto da divisão)
    const diasAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24));
    const horasAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 *60))
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60))
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60)) / 1000)
    

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (distanciaAteOEvento < 0 ) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'O Evento já encerrou';
    }
}, 1000)
