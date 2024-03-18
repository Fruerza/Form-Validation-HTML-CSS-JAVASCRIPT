const nama = document.getElementById("name")
const password = document.getElementById("password")
const form =document.getElementById("form")
const kasusError = document.getElementById("error")

form.addEventListener("submit", (e) => {
    let messages = []
    if (nama.value === "" || nama.value == null) {
        messages.push("Tolong masukkan nama pengguna")
    }

    if (password.value.length <= 8) {
        messages.push("Password harus lebih dari 8 karakter ")
    }

    if (password.value.length >= 15 ){
        messages.push("Password harus kurang dari 15 karakter ")
    }

    if (messages.length > 0) {
    e.preventDefault()
    kasusError.innerText = messages.join(", ")
    }
})