
function generateCards(employees) {
    if(!employees) {
        return '';
    }
    employees.forEach(function(employee) {
        return `
        <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${employee.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${employee.role}</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
          </div>
        `
    })
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
    <div class="bg-danger w-100 height-25">
        testdiv
    </div>

    <div id="hold-cards">

        <!-- test card -->
        ${generateCards(employees)}
    </div>
    </body>
    </html>`;

}

module.exports = generatePage;

