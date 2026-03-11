const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")

const app = express()

/* ---------------- MIDDLEWARE ---------------- */

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))

/* ---------------- MONGODB CONNECTION ---------------- */

/* ---------------- MONGODB ---------------- */

mongoose.connect("mongodb://127.0.0.1:27017/nagarseva")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))
/* ---------------- USER MODEL ---------------- */

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,        // citizen / admin
    department: String,  // for admin
    sector: String
})

const User = mongoose.model("User", userSchema)

/* ---------------- COMPLAINT MODEL ---------------- */

const complaintSchema = new mongoose.Schema({

    complaintId: String,
    user: String,

    title: String,
    description: String,

    location: String,
    department: String,
    sector: String,

    latitude: Number,
    longitude: Number,

    status: {
        type: String,
        default: "Submitted"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})

const Complaint = mongoose.model("Complaint", complaintSchema)

/* ---------------- HOME PAGE ---------------- */

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "signup.html"))
})

/* ---------------- SIGNUP ---------------- */

app.post("/signup", async (req, res) => {

    try {

        const { name, email, password, role, department, sector } = req.body

        const existing = await User.findOne({ email })

        if (existing) {
            return res.json({
                success: false,
                message: "Email already exists"
            })
        }

        const newUser = new User({
            name,
            email,
            password,
            role,
            department,
            sector
        })

        await newUser.save()

        res.json({
            success: true,
            message: "Signup successful"
        })

    } catch (err) {

        res.json({
            success: false,
            message: "Signup failed"
        })

    }

})

/* ---------------- LOGIN ---------------- */

app.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user || user.password !== password) {

            return res.json({
                success: false,
                message: "Invalid email or password"
            })

        }

        res.json({
            success: true,
            name: user.name,
            email: user.email,
            role: user.role,
            department: user.department,
            sector: user.sector
        })

    } catch (err) {

        res.json({
            success: false,
            message: "Login error"
        })

    }

})

/* ---------------- ADD COMPLAINT ---------------- */

app.post("/complaint", async (req, res) => {

    try {

        const {
            user,
            title,
            description,
            location,
            department,
            sector,
            latitude,
            longitude
        } = req.body

        const complaintId = "CMP-" + Date.now()

        const complaint = new Complaint({
            complaintId,
            user,
            title,
            description,
            location,
            department,
            sector,
            latitude,
            longitude,
            status: "Submitted"
        })

        await complaint.save()

        res.json({
            success: true,
            message: "Complaint submitted",
            complaintId
        })

    } catch (err) {

        renos.json({
            success: false,
            message: "Complaint failed"
        })

    }

})

/* ---------------- GET USER COMPLAINTS ---------------- */

app.get("/getComplaints/:user", async (req, res) => {

    try {

        const complaints = await Complaint
            .find({ user: req.params.user })
            .sort({ createdAt: -1 })

        res.json(complaints)

    } catch (err) {

        res.json([])

    }

})

/* ---------------- ADMIN DEPARTMENT COMPLAINTS ---------------- */

app.get("/adminComplaints/:department", async (req, res) => {

    try {

        const complaints = await Complaint
            .find({ department: req.params.department })
            .sort({ createdAt: -1 })

        res.json(complaints)

    } catch (err) {

        res.json([])

    }

})

/* ---------------- UPDATE COMPLAINT STATUS ---------------- */

app.put("/updateStatus/:id", async (req, res) => {

    try {

        const { status } = req.body

        await Complaint.updateOne(
            { complaintId: req.params.id },
            { $set: { status } }
        )

        res.json({
            success: true,
            message: "Status updated"
        })

    } catch (err) {

        res.json({
            success: false
        })

    }

})

/* ---------------- TRACK COMPLAINT ---------------- */

app.get("/track/:id", async (req, res) => {

    try {

        const complaint = await Complaint.findOne({
            complaintId: req.params.id
        })

        if (!complaint) {

            return res.json({
                success: false,
                message: "Complaint not found"
            })

        }

        res.json({
            success: true,
            complaint
        })

    } catch (err) {

        res.json({
            success: false
        })

    }

})

/* ---------------- SERVER ---------------- */

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})