# 100 Days Of Code - Log

### Day 0: March 31, 2025

**Today's Progress**: Forked and cloned repo, getting git(s) ready to go. Successfully configured both gitlab and github locally to work on both contract work and 100 Days.

**Thoughts**: It was really important to make sure I can do contract work for clients using gitlab while I'm going through this excercise and pushing regularly to my github account. Took some doing but I'm good to go. 

**Link(s) to work**: Be patient

### Day 1: April 1, 2025

**Today's Progress**: Starting simple, cranked out a simple html template to remind myself what bare bones really is

**Thoughts:** Start with what I feel confident in while I'm studying python further

**Link(s) to work**: [codepen](https://codepen.io/lance-hardy/pen/gbOZxVG)

### Day 2: April 2, 2025

**Today's Progress**: Decided to use the initial html_template project to expand on each day until I'm ready to dive into Python projects. Today I will be adding the ability to use scss and I'll use gulp to compile. Notes:

- npm init -y
- npm install --save-dev gulp gulp-sass sass gulp-sourcemaps
  - gulp: Task runner.
  - gulp-sass: Compiles SCSS to CSS.
  - sass: Dart Sass compiler (required by gulp-sass).
  - gulp-sourcemaps: Generates sourcemaps for easier debugging in the browser.
- create gulpfile.js

**Thoughts:** This is a good evolution for this starting project. 

**Link(s) to work**: Wait for more significant changes. Progress in this log. 

### Day 3: April 3, 2025

**Today's Progress**: Working on resume versions led to an important conclusion. I am learning Terraform and need to be able to illustrate that on resumes and in interviews. Best way to do that is to create infrastructure in my AWS account and push projects to github. Cool. So today I:

- created aliases for my client and personal AWS credentials so I don't accidentally create a bunch of infrastructure in a client's AWS account (that would be bad!)
- selected a Terraform project to do: create an S3 bucket website for a domain I own in Route53
- created the Terraform config file for this and began testing with 'terraform plan'

**Thoughts:** This is pretty cool stuff. Looking forward to digging in more tomorrow. 

**Link(s) to work**: Wait for more significant changes. Progress in this log. 

### Day 4: April 4, 2025

**Today's Progress**: Working on getting my Terraform plan to successfully execute. Hampered by an extremely odd bug in my AWS console. Every time I leave the IAM page it removes my permissions which of course makes Terraform fail at plan, apply and destroy. <sigh>

That being said, I finish today with a successful terraform apply! 

**Thoughts:** Very engaging and I am having fun with this project!

**Link(s) to work**: Wait for more significant changes. Progress in this log. 

### Day 5: April 7, 2025

**Today's Progress**: Troubleshooting DNS issues with the Terraform deploy. It was successful but there is an issue with the cloudfront distribution and the build needs to include obtaining an SSL cert.

**Thoughts:** It's Monday.

**Link(s) to work**: Wait for more significant changes. Progress in this log. 