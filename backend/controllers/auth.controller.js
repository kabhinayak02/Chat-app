
export const signup = async (req, res) => {
   try {
        const {fullname, username, password, confirmPassword, gender} = req.body;
        
   } catch (error) {
    
   }
    
}

export const login = async (req, res) => {
    res.send("Login user")
    console.log("Login")
}

export const logout = async (req, res) => {
    res.send("Logout User")
    console.log("Logout")
}
