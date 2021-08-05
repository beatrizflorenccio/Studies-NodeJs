const questions = [
    "O que eu aprendi hoje?",
    "O que me deixou aborrecido? O que eu posso fazer para mudar isso?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = ( index = 0) => {
    process.stdout.write( "\n" + questions[index] + " >  ")
}

ask()

answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
    
})