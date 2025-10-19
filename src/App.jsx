import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div className="flex-shrink-0">
            <img
              src="https://scontent.fdvo5-1.fna.fbcdn.net/v/t39.30808-1/497513466_2175083026276684_3075551396526308932_n.jpg?stp=c241.0.1536.1536a_dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ft2KF-Q8GXUQ7kNvwHZ-Jew&_nc_oc=AdlmZMLbRq3bdee8LUh13mKXfn3y8knw674z1g0FwW2egA79TbcMxa0aQhjy2E5Mxzs&_nc_zt=24&_nc_ht=scontent.fdvo5-1.fna&_nc_gid=uWawba1dqZtuEVkX8ubbmg&oh=00_AfdrsjRUkdtO4Umob8RISQl3VqtnaHGjcg3X8M4sdz2sOQ&oe=68FA19A8"
              alt="Profile"
              className="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover border-4 border-[#e6eef8] shadow-sm"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold text-[#003153]">
              Lanuel Arcay
            </h1>
            <p className="mt-2 text-gray-600 md:text-base lg:text-lg">
              2nd Year IT Student, Musician, Artist.
            </p>

            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
              <a
                href="https://www.facebook.com/lanuel.arcay/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#003153] hover:bg-[#003153] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495V14.708h-3.13v-3.62h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.315h3.588l-.467 3.62h-3.121V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
                </svg>
                Facebook
              </a>

              <a
                href="https://github.com/Vintroloquist"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#003153] hover:bg-[#003153] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.42c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.36-1.33-1.73-1.33-1.73-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.77-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.24A11.4 11.4 0 0 1 12 5.8a11.3 11.3 0 0 1 3.01.4c2.29-1.56 3.3-1.24 3.3-1.24.66 1.65.24 2.87.12 3.17.77.85 1.24 1.93 1.24 3.25 0 4.63-2.81 5.66-5.49 5.96.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0z" />
                </svg>
                GitHub
              </a>

              <a
                href="https://www.youtube.com/@Vintroloquist"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#003153] hover:bg-[#003153] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.8-1.7-.8-2.1-.9C17.8 2.5 12 2.5 12 2.5h0s-5.8 0-8.6.5c-.4 0-1.3.1-2.1.9C.7 4.6.5 6.2.5 6.2S0 8.1 0 10v1.9c0 1.9.5 3.8.5 3.8s.2 1.6.8 2.3c.8.8 1.9.8 2.4.9 1.7.2 7.3.4 8.3.4s6.6-.1 8.3-.4c.4 0 1.6 0 2.4-.9.6-.7.8-2.3.8-2.3s.5-1.9.5-3.8V10c0-1.9-.5-3.8-.5-3.8zM9.7 14.5V8.9l6.1 2.8-6.1 2.8z" />
                </svg>
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
