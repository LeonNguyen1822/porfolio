// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        })
      }
    })
  })

  // Navbar color change on scroll
  const navbar = document.getElementById("mainNav")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled")
      navbar.style.padding = "10px 0"
    } else {
      navbar.classList.remove("navbar-scrolled")
      navbar.style.padding = "15px 0"
    }
  })

  // Back to top button
  const backToTopButton = document.getElementById("backToTop")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("active")
    } else {
      backToTopButton.classList.remove("active")
    }
  })

  // Fix for back to top button
  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Contact form submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Here you would typically send the form data to a server
      // For demonstration, we'll just log it and show an alert
      console.log("Form submitted:", { name, email, subject, message })

      // Show success message
      alert("Thank you for your message! I will get back to you soon.")

      // Reset form
      contactForm.reset()
    })
  }

  // Dark mode toggle
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]')
  const currentTheme = localStorage.getItem("theme")

  if (currentTheme) {
    document.body.classList.toggle("dark-mode", currentTheme === "dark")
    if (currentTheme === "dark") {
      toggleSwitch.checked = true
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.body.classList.add("dark-mode")
      localStorage.setItem("theme", "dark")
    } else {
      document.body.classList.remove("dark-mode")
      localStorage.setItem("theme", "light")
    }
  }

  toggleSwitch.addEventListener("change", switchTheme)

  // Add animation classes on scroll
  const animateElements = document.querySelectorAll(".skill-category, .project-card, .timeline-item, .education-card")

  function checkScroll() {
    animateElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.2

      if (elementPosition < screenPosition) {
        element.classList.add("fade-in")
      }
    })
  }

  window.addEventListener("scroll", checkScroll)
  checkScroll() // Check on initial load

  // Initialize active nav link based on scroll position
  function setActiveNavLink() {
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-link")

    let currentSection = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.offsetHeight

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active")
      }
    })
  }

  window.addEventListener("scroll", setActiveNavLink)
  setActiveNavLink() // Set active link on initial load

  // Fix for hero section buttons
  document.querySelector('.hero-btns a[href="#projects"]').addEventListener("click", (e) => {
    e.preventDefault()
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 70,
        behavior: "smooth",
      })
    }
  })

  document.querySelector('.hero-btns a[href="#contact"]').addEventListener("click", (e) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 70,
        behavior: "smooth",
      })
    }
  })

  // Ensure social media icons are clickable
  document.querySelectorAll(".social-icons a").forEach((icon) => {
    icon.addEventListener("click", function (e) {
      // Let the default behavior happen for these links
      // This ensures href attributes work properly
      const href = this.getAttribute("href")
      if (href.startsWith("tel:") || href.startsWith("mailto:")) {
        // For tel: and mailto: links, let the default behavior work
        return true
      }
    })
  })
})

