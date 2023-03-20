import React from 'react'
import Header from '../Component/Header'

function Experience() {
  return (
    <div class="container-fluid p-0">
        <Header />
       

        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="experience-experience">Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="intern-experience">Intern</h3>
                <div class="setel-mb-3">Setel Ventures Sdn Bhd</div>
                <li class="intern-experience-one-experience">
                Provides outstanding technical support to clients.
                </li>
                <li class="intern-experience-two-experience">
                Monitors app’s dashboards 24/7.
                </li>
                <li class="intern-experience-three-experience">
                Constant surveillance on technical errors that need to be fixed
                and ask the third party to fix them immediately.
                </li>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">May 2020 - December 2020</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="ss-experience">Special Service</h3>
                <div class="ss-mb-3">Universiti Teknologi Petronas</div>
                <li class="ss-experience-one-experience">
                Writing reports for lab sessions.
                </li>
                <li class="ss-experience-two-experience">
                Creating storyboards.
                </li>
                <li class="ss-experience-three-experience">
                Writing literature reviews.
                </li>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">February 2022 - April 2022</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="developer-experience">Java Developer</h3>
                <div class="developer-mb-3">Djava Factory Sdn Bhd</div>
                <li class="developer-experience-one-experience">
                Drawing UML Diagrams such as use case diagrams, sequence
                diagrams and wireframes
                </li>
                <li class="developer-experience-two-experience">
                Front-End Development – such as creating user guidelines for
                the company’s website, centering sign in homepage
                </li>
                <li class="developer-experience-three-experience">
                Writing documentation for UML Diagrams
                </li>
                <li class="developer-experience-four-experience">
                Managed to fix bugs in current company’s websites
                </li>
                <li class="developer-experience-five-experience">
                Managed to implement new language in current company’s websites
                </li>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">April 2022 - Present</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
  )
}

export default Experience
