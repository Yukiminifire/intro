import { createSignal, For, Show } from 'solid-js'
import avatarImg from './avatar.png?url'
import cloudImg from './cloud.png?url'

function App() {
  const [activeSection, setActiveSection] = createSignal('about')

  const skills = [
    { name: 'TypeScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Docker', level: 70 },
  ]

  const projects = [
    {
      name: 'Project Alpha',
      description: 'A modern web application built with React and TypeScript',
      tech: ['React', 'TypeScript', 'Node.js'],
      link: '#',
    },
    {
      name: 'Project Beta',
      description: 'Real-time data visualization dashboard',
      tech: ['Vue', 'D3.js', 'Python'],
      link: '#',
    },
    {
      name: 'Project Gamma',
      description: 'Machine learning model deployment platform',
      tech: ['Docker', 'K8s', 'ML'],
      link: '#',
    },
  ]

  const socials = [
    { name: 'GitHub', icon: '🐙', link: '#' },
    { name: 'Twitter', icon: '🐦', link: '#' },
    { name: 'LinkedIn', icon: '💼', link: '#' },
    { name: 'Email', icon: '📧', link: '#' },
  ]

  return (
    <div class="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div class="container mx-auto px-4 py-12 max-w-5xl">
        <header class="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div class="relative w-48 h-72">
            <div class="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden">
              <img
                src={avatarImg}
                alt="avatar"
                class="w-full h-full object-cover object-[center_30%]"
              />
            </div>
          </div>
          <div class="text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              yukiminifire
            </h1>
            <p class="text-xl text-gray-500 mb-4">Amazon Operations</p>
            <p class="text-gray-600 max-w-md">
              E-commerce enthusiast with a passion for data-driven growth and
              customer experience.
            </p>
          </div>
        </header>

        <nav class="flex flex-wrap justify-center gap-3 mb-12">
          <For each={['about', 'skills', 'projects', 'contact']}>
            {(section) => (
              <button
                onClick={() => setActiveSection(section)}
                class={`px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-sm ${
                  activeSection() === section
                    ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-pink-50'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            )}
          </For>
        </nav>

        <Show when={activeSection() === 'about'}>
          <section class="bg-white rounded-3xl p-8 shadow-lg border border-pink-100">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">About Me</h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-lg font-semibold text-pink-500 mb-3">
                  Background
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  I'm a full-stack developer with 5+ years of experience
                  building web applications. I love working with modern
                  technologies and creating seamless user experiences.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-pink-500 mb-3">
                  Interests
                </h3>
                <ul class="text-gray-600 space-y-2">
                  <li>⚡ Building performant web apps</li>
                  <li>📱 Open source projects</li>
                  <li>🤖 Machine learning</li>
                  <li>☕ Coffee & code</li>
                </ul>
              </div>
            </div>
          </section>
        </Show>

        <Show when={activeSection() === 'skills'}>
          <section class="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Skills</h2>
            <div class="space-y-4">
              <For each={skills}>
                {(skill) => (
                  <div>
                    <div class="flex justify-between text-gray-600 mb-2">
                      <span class="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        class="h-full bg-gradient-to-r from-pink-300 to-purple-400 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                )}
              </For>
            </div>
          </section>
        </Show>

        <Show when={activeSection() === 'projects'}>
          <section class="bg-white rounded-3xl p-8 shadow-lg border border-blue-100">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Projects</h2>
            <div class="grid md:grid-cols-3 gap-6">
              <For each={projects}>
                {(project) => (
                  <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 class="text-lg font-bold text-gray-800 mb-2">
                      {project.name}
                    </h3>
                    <p class="text-gray-500 text-sm mb-4">
                      {project.description}
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <For each={project.tech}>
                        {(tech) => (
                          <span class="text-xs px-2 py-1 bg-pink-100 text-pink-600 rounded-full">
                            {tech}
                          </span>
                        )}
                      </For>
                    </div>
                    <a
                      href={project.link}
                      class="inline-block mt-4 text-sm text-purple-500 hover:text-purple-600 transition-colors"
                    >
                      View Project →
                    </a>
                  </div>
                )}
              </For>
            </div>
          </section>
        </Show>

        <Show when={activeSection() === 'contact'}>
          <section class="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            <p class="text-gray-600 mb-8">
              Feel free to reach out if you'd like to collaborate or just say
              hi!
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <For each={socials}>
                {(social) => (
                  <a
                    href={social.link}
                    class="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 text-gray-700 rounded-2xl transition-all duration-300 hover:scale-105 shadow-sm"
                  >
                    <span>{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                )}
              </For>
            </div>
          </section>
        </Show>

        <footer class="text-center text-gray-400 mt-16 pt-8 border-t border-pink-100">
          <p>© 2026 yukiminifire. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
