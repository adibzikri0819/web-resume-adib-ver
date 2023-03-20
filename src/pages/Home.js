import React from 'react'
import Header from '../Component/Header'
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

function Home() {
  return (
    <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Adib
              <span class="text-primary">Zikri</span>
            </h1>
            <div class="subheading mb-5">
              15 Jalan Pulau Angsa U10/48 · Sunway Alam Suria,  40170 · (018) 369-4950 ·
              <a href="mailto:name@email.com">adibzikri0819@gmail.com</a>
            </div>
            <p class="lead mb-5">
            An Information and Communication
            Technology graduate with strong
            problem-solving skills who aspire to
            seek for a full-time position related to
            related to Information and
            Communication Technology starting
            from August 2022.
            </p>
            <div class="social-icons">
              <a class="social-icon" href="https://www.facebook.com/muhammadadibzikri.rozali.3/">
                <BsFacebook/>
              </a>
              <a class="social-icon" href="https://www.instagram.com/_adbzkri/">
                <BsInstagram/>
              </a>
              <a class="social-icon" href="https://twitter.com/adbzkri">
                <BsTwitter/>
              </a>
              <a class="social-icon" href="https://github.com/adibzikri0819">
                <BsGithub/>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />

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

    <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="interests-interests">Interests</h2>
            <p class="interests-paragraph-interests">
            Through my academic journey, I have found a few things that I am passionate for, which are
            including web development and software engineering. I am currently interested in building free
            websites by using HTML, CSS, Javascript and Angular. Not only that, I am also interested in other
            areas as well, such as writing and regular sports like jogging. Thank you for taking the time to review
            my resume. I look forward to talking with you.
            </p>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="references">
      <div class="resume-section-content">
        <h2 class="references-references">References</h2>
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <div class="references-mb-3">Past employers' credentials:</div>
            <li class="credentials-references-one-references">
            Dr. Norshakirah Aziz (UTP Lecturer) - 016-219-2818
            </li>
            <li class="credentials-references-two-references">
            Natalie (Djava HR) - 012-486-6726
            </li>
          </div>
        </div>
      </div>
    </section>
      </div>
  )
}

export default Home