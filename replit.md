# Omar Sinno — Personal Portfolio

Personal portfolio website for Omar Sinno, Avionics Integration Engineering Professional at Airbus.

## Stack

- React 18 + Vite
- Tailwind CSS (custom CSS variable theme system)
- AOS (Animate On Scroll)
- EmailJS (contact form)

## Run

```bash
npm run dev   # dev server on port 5000
npm run build # production build to dist/
```

## Structure

```
src/
  App.jsx                  # Root, AOS init
  index.css                # Tailwind + CSS variable themes (ocean/sunset/royal)
  main.jsx                 # Entry point
  components/
    Navbar.jsx             # Fixed top nav
    Hero.jsx               # Landing hero, LinkedIn/GitHub, CV download
    About.jsx              # Background, experience list, education
    Skills.jsx             # 4 skill groups: Engineering, V&V/Cert, Software, Languages
    Projects.jsx           # 8 project cards
    Contact.jsx            # EmailJS contact form
    Footer.jsx             # Name, email, LinkedIn, copyright
  theme/
    useTheme.js            # Theme palette hook (localStorage)
public/
  Omar.pdf                 # CV download (latest resume)
  imghero.png              # Profile photo
  ...                      # Other project/logo images
```

## User preferences

- No dash "-" characters used as separators or bullets in visible text
- No Facebook or Instagram links
- No theme switcher widget
- Content must reflect current role: Airbus Montreal, A220 Avionics Integration Engineering Professional
- Graduated from Concordia University (BEng Aerospace Engineering)
