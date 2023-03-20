import React from 'react'
import Header from '../Component/Header'

function Education() {
  return (
    <div class="container-fluid p-0">
        <Header />
        

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="education-education">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="education-utp">Universiti Teknologi Petronas</h3>
                <div class="utp-mb-3">Bachelor of Information Technology</div>
                <div class="utp-education-one-education">Computer Science - Software Engineering</div>
                <p class="utp-education-gpa-education">GPA: 3.11</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">September 2018 - December 2021</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
  )
}

export default Education