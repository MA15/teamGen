const genHtml = (memberData) => {
  const genArray = [];
  

  const addManager = (manager) => {
    let mancard = `
    <div class="col-lg-4">
    <div class="card border-primary mb-4" style="width: 18rem;">
    <div class="card-header">${manager.getName()}: ${manager.getRole()}</div>
    <div class="card-body text-primary" id="manager">
    <div class="employeeInfo">
      <li>ID: ${manager.getID()}</li>
      <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li>Office Number: ${manager.getOfficeNum()}</li>
    </div>
    </div>
    </div>
  </div> `
    genArray.push(mancard);
  };


  const addEngineer = (currentEngineer) => {
    let ecard=`
    <div class="col-lg-4">
    <div class="card border-primary mb-4" style="width: 18rem;">
    <div class="card-header">${currentEngineer.getName()}: ${currentEngineer.getRole()}</div>
    <div class="card-body text-primary" id="engineer">
    <div class="eInfo">
    <li>ID: ${currentEngineer.getID()}</li>
    <li>Email: <a href="mailto:${currentEngineer.getEmail()}">${currentEngineer.getEmail()}</a></li>
    <li>GitHub: <a href="https://github.com/${currentEngineer.getGitHub()}" target="_blank">${currentEngineer.getGitHub()}</a></li>
    </div>
    </div>
    </div>
  </div>`
    genArray.push(ecard);
  };

 
  const addIntern = (currentIntern) => {
    let icard = `
    <div class="col-lg-4">
    <div class="card border-primary mb-4" style="width: 18rem;">
    <div class="card-header">${currentIntern.getName()}: ${currentIntern.getRole()}</div>
    <div class="card-body text-primary" id ="intern">
    <div class="employeeInfo">
    <li>ID: ${currentIntern.getID()}</li>
    <li>Email: <a href="mailto:${currentIntern.getEmail()}">${currentIntern.getEmail()}</a></li>
    <li>School: ${currentIntern.getSchool()}</li>
    </div>
    </div>
    </div>
  </div>`
    genArray.push(icard);
  };

  for (let i = 0; i < memberData.length; i++) {
    if (memberData[i].getRole() == "Manager") { addManager(memberData[i]); 
    } else if (memberData[i].getRole() == "Engineer") {
      addEngineer(memberData[i]);
    } else if (memberData[i].getRole() == "Intern") {
      addIntern(memberData[i]);
    }
  }
  return genArray.join("");
};







function generateTeam(memberData) {
return `
<!DOCTYPE html>
<html lang="en">
<head>
<title>Team</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
<link rel="stylesheet" href="./styles.css">
</head>
<body>

<div class="jumbotron">
<h1 class="team">Team</h1>
</div>
<div class="container">

<div class="row">

${genHtml(memberData)}

</div>
</div>

</body>
</html>
`;
}
module.exports = generateTeam;

