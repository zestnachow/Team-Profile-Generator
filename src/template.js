// Template literal for manager card
const createManagerCard = (manager) => {
    return `
<div class="col-4 mt-6">
    <div class="card h-100">
        <div class="card-header">
            <h3>${manager.name}</h3>
            <h4>Manager</h4><i class="material-icons">groups</i>
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office-number">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>`;
}

// Template literal for engineer card
const createEngineerCard = (engineer) => {
    return `
<div class="col-4 mt-6">
    <div class="card h-100">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4><i class="material-icons">engineering</i>
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: ${engineer.github}</p>
        </div>
    </div>
</div>`;
}

// Template literal for intern card
const createInternCard = (intern) => {
    return `
<div class="col-4 mt-6">
    <div class="card h-100">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <h4>Intern</h4><i class="material-icons">school</i>
        </div>
        <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>
    </div>
</div>`;
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