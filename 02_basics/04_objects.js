// const tinderUser = new Object() // Singleton Object

const tinderUser = {} // Non Singleton Object

tinderUser.id = "123"
tinderUser.name = "Meraj"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "meraj@gmail.com",
    fullname: {
        userfullname:{
            fistname: "Meraj",
            lastname: "Ahmed"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.fistname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

const users = [
    {
        id: "123",
        email: "meraj@gmail.com"
    },
    {

    },
    {

    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(Object.values(tinderUser))


// console.log(tinderUser.hasOwnProperty("id"))


// De Instructor  a Object

const course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: "Meraj Ahmed"
}

// course.courseIstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor)
console.log(instructor)

//  {
//     "name": "Meraj",
//     "courseName": "JavaScript",
//     "price": "999"
//  }

