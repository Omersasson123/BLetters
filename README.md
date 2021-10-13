# BLetters
Front-end of BLetters project, idea: website that would allow users to pick blog archives and send them weekly blog emails. Created Figma for website from scratch and implmented design and functionality using HTML, CSS, and JavaScript. Added nodemailer and cron jobs to allow sending confirmation email, default is set to run every second. Created front-end so on the backend there are no actual articles to pick from. Folders SendEmailFirebase and blogs can be ignored.

## To run website
  1. Clone repo
  2. Edit the password in app.js to the password commented below to give access to given account
  3. Run node app.js in BLproject directory (Currently sends emails every second using cron jobs, so be aware
  4. Go to http://localhost:3000/

## Screenshot of BLetters home page
<img width="1439" alt="Screen Shot 2021-10-13 at 12 50 13 AM" src="https://user-images.githubusercontent.com/32005218/137090247-9d47a497-f503-4e64-9c4f-601287f7ae89.png">