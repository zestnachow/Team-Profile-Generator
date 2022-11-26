// Template literal for manager card
const createManagerCard = (manager) => {
    return `
    `
}

// Template literal for engineer card
const createEngineerCard = (engineer) => {
    return ``
}

// Template literal for intern card
const createInternCard = (intern) => {
    return ``
}

// Function to generate requested cards based on user input
const generateCards = (userResponses) => {
    const cards = [];
    for (let i = 0; i < userResponses.length; i++) {
        const member = userResponses[i];
        const memberRole = member.getRole();

        if (memberRole === "Manager") {
            const newManagerCard = createManagerCard(member);
            cards.push(newManagerCard);
        } else if (memberRole === "Engineer") {
            const newEngineerCard = createEngineerCard(member);
            cards.push(newEngineerCard);
        } else if (memberRole === "Intern") {
            const newInternCard = createInternCard(member);
            cards.push(newInternCard);
        }
    }
    const allCards = cards.join("");
    return generatePage(allCards);
}

const generatePage = (allCards) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <link rel="icon" href="data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAB6WDIAAAAAAP///wCtra0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAERERERERERETMzMzMzMxERMiIiIiIiIREyAAAAAAAAETIAAAAAAAARMgAAAAAAABEyAAAAAAAAETIAAAAAAAARMgAAAAAAABESAAAAAAAAEREAAAAAAAARETIAMzIAEREREgAiIgARERERAAAAABEREREQAAABERERERERERERH//wAAgAcAAIADAACAAQAAgAEAAIABAACAAQAAgAEAAIABAADAAQAA4AEAAOAHAADwBwAA+AcAAPwPAAD//wAA">
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
        <nav class="navbar bg-black w-100 d-flex justify-content-center">
            <h1 class="text-white mt-3">Team Profile Generator</h1>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content">
                ${allCards}
            </div>
        </div>
    </main>
</body>
</html>`;
}