import React from 'react'
import Header from '../Component/Header'

function Skills() {
  return (
    <div class="container-fluid p-0">
    <Header />
   

    <section class="resume-section" id="skills">
      <div class="resume-section-content">
        <h2 class="skills-skills">Skills</h2>
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <div class="skills-mb-3">Programming Languages</div>
            <li class="programming-skills-one-skills">
            React JS
            </li>
            <li class="programming-skills-two-skills">
            Angular
            </li>
            <li class="programming-skills-three-skills">
            Javascript
            </li>
            <li class="programming-skills-four-skills">
            Java
            </li>
            <li class="programming-skills-five-skills">
            HTML
            </li>
            <li class="programming-skills-six-skills">
            CSS
            </li>
          </div>
        
        </div>
      </div>
    </section>
    <hr class="m-0" />
  </div>
  )
}

export default Skills