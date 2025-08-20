

Name =document.querySelector("#name")
Name.textContent= Intro_data.name

IntroMain = document.querySelector("#Intro")
address= document.createElement("a")
address.className = "IntroChild"
address.textContent = Intro_data.address
phone = document.createElement("a")
phone.className = "IntroChild"
phone.textContent = Intro_data.phone
email = document.createElement("a")
email.textContent= Intro_data.email
email.className = "IntroChild"
email.href = Intro_data.email
github = document.createElement("a")
github.className = "IntroChild"
github.textContent = Intro_data.github
github.href = Intro_data.github
address.className = "IntroChild"
website = document.createElement("a")
website.textContent = Intro_data.website
website.className = "IntroChild"
website.href = Intro_data.website
linkdin = document.createElement("a")
linkdin.textContent = Intro_data.linkdin
linkdin.className = "IntroChild"
linkdin.href = Intro_data.linkdin

IntroMain.append(address,phone,email,github,website,linkdin)


summary = document.querySelector("#summary")
summary.textContent = Intro_data.summary


// education
const eduMain= document.querySelector('.education')
const EduDegree = document.createElement("div")
EduDegree.className="EduDegree"
const EduSubject = document.createElement("div")
EduSubject.className="EduSubject"



const EduStartYR = document.createElement("div")
EduStartYR.className="start_yr"
const EduEndYR = document.createElement("div")
EduEndYR.className= "end_yr"

for(const [key, value] of Object.entries(edu_data)) {
  cln_EduDegree  = EduDegree.cloneNode()
  cln_EduDegree.textContent = value.degree
  cln_EduSubject = EduSubject.cloneNode()
  cln_EduSubject.textContent = value.subject
  cln_EduStartYR = EduStartYR.cloneNode()
  cln_EduStartYR.textContent = value.start
  cln_EduEndYR   = EduEndYR.cloneNode()
  cln_EduEndYR.textContent= value.end

  const edu = document.createElement("div")
  edu.className = "edu"

  const degreeName = document.createElement("div")
  degreeName.className= "DegreeName"

  const duration = document.createElement("div")
  duration.className="Duration"

  const degreeNameYR= document.createElement("div")
  degreeNameYR.className="ForDuration"

  eduMain.append(edu)
  edu.append(degreeNameYR)
  degreeNameYR.append(degreeName,duration)
  degreeName.append(cln_EduDegree,cln_EduSubject)
  duration.append(cln_EduStartYR, cln_EduEndYR)

  EduBody = document.createElement("div")
  EduBody.className= "EduBody"
  EduBody.textContent= value.university
  edu.append(EduBody)
}


// experience
const experience = document.querySelector(".exp_main")
const exp = document.createElement("div")
exp.className= "Exp"
const role = document.createElement("div") 
role.className= "role"
const company = document.createElement("div") 
company.className="company"
const roleINcompany= document.createElement("div")
roleINcompany.className= "roleINcompany"
const ExpSRT= document.createElement("div")
ExpSRT.className= "start_yr"
const ExpEND= document.createElement("div")
ExpEND.className= "end_yr"
const EXp_body = document.createElement("div")
EXp_body.className = "Exp_body"

for(const [key, value] of Object.entries(exp_data)) {
  cln_exp = exp.cloneNode()
  experience.appendChild(cln_exp)
  cln_role= role.cloneNode()
  cln_role.textContent= value.role
  cln_company = company.cloneNode()
  cln_company.textContent= value.company
  cln_ExpSRT = ExpSRT.cloneNode()
  cln_ExpSRT.textContent= value.start
  cln_ExpEND = ExpEND.cloneNode()
  cln_ExpEND.textContent = value.end
  cln_Exp_body = EXp_body.cloneNode()
  cln_Exp_body.textContent = value.body

  cln_exp.append(cln_role, cln_company, cln_ExpSRT, cln_ExpEND, cln_Exp_body)

  cln_roleINcompany = roleINcompany.cloneNode()
  cln_role.parentNode.insertBefore(cln_roleINcompany, cln_role)
  cln_roleINcompany.append(cln_role, cln_company)

  const ExpDuration = document.createElement("div")
  ExpDuration.className = "Duration"

  cln_ExpSRT.parentNode.insertBefore(ExpDuration, cln_ExpSRT)
  ExpDuration.append(cln_ExpSRT, cln_ExpEND)

  const ExpRoleDuration = document.createElement("div")
  ExpRoleDuration.className= "ForDuration"
  cln_roleINcompany.parentNode.insertBefore(ExpRoleDuration, cln_roleINcompany)
  ExpRoleDuration.append(cln_roleINcompany, ExpDuration)
}


// skills

const skill_header= document.querySelector(".skills")
const skill_section = document.createElement("div")
skill_section.className="skill_section"

skill_header.parentNode.insertBefore(skill_section,skill_header.nextSibling)

for(const [key,value] of Object.entries(skills)) {
  const each_skill=document.createElement("div")
  each_skill.className="each_skill"
  each_skill.innerHTML= `<strong>${key}</strong> : ${value.join(", ")}`
  skill_section.appendChild(each_skill)
}

// projects
const projects_main= document.querySelector(".projects_main")
const project= document.createElement("div")
project.className= "project"
const proj_title= document.createElement("div")
proj_title.className= "title"
const proj_tools= document.createElement("div")
proj_tools.className = "tools"
const descript = document.createElement("div")
descript.className ="descript"

for(const [key,value] of Object.entries(project_data)) {
  const cloned_project =project.cloneNode()
  projects_main.appendChild(cloned_project)
  
  const cln_proj_title = proj_title.cloneNode()
  cln_proj_title.innerHTML = `<strong>${value.title}</strong>`
  const cln_proj_tools = proj_tools.cloneNode()
  cln_proj_tools.innerHTML = `<strong>Tools: </strong>${value.tools}`
  const cln_descript =descript.cloneNode()
  cln_descript.innerHTML= value.body
  cloned_project.append(cln_proj_title, cln_proj_tools, cln_descript) 
}

// Acheivements
achMain = document.querySelector(".Acheivement_main")
for ( let i of achieve_data) {
  ach = document.createElement("div")
  ach.className= "acheivement"
  ach.textContent = i
  achMain.append(ach)
}

lan=document.querySelector(".languages")
lan.textContent= languages.join(", ")