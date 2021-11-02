
function generateCards(employees) {
    if(!employees) {
        return '';
    }
    var cards = []
    employees.forEach(function(employee) {

        const genGitHub = () => {
            if(!employee.github) {
            return '';
            }
            return `<li class="list-group-item"><a href="https://github.com/${employee.github}/" class="card-link">GitHub</a>`
            }
        const genOfficeNum = () => {
            if(!employee.officeNum) {
            return '';
            }
            return `<li class="list-group-item"><a href="tel:${employee.officeNum}">${employee.officeNum}</a>`
            }
        const genSchool = () => {
            if(!employee.school) {
                return '';
            }
            return `<li class="list-group-item">${employee.school}</a>`
        }

        cards.push(`<div class="col">
                <div class="card m-2"">
                <div class="card-header">
                ${employee.name} 
                </div>        
                <ul class="list-group list-group-flush">
                <li class="list-group-item">${employee.role}
                <li class="list-group-item">${employee.employeeID}
                <li class="list-group-item"><a href="mailto:${employee.email}" class="card-link">Email</a>
                ${genGitHub(employee.github)}
                ${genOfficeNum(employee.officeNum)}
                ${genSchool(employee.school)}
                </ul>
          </div>
          </div>
        `)
    })
    return cards.join(" ");
}
function generatePage(employees) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    <title>The Team</title>
    </head>

    <body>
    <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">The Team!</span>
     </div>
    </nav>
    <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">

        <!-- test card -->
        ${generateCards(employees)}

    </div>
    </div>
    </body>
    </html>`;

}

module.exports = generatePage

