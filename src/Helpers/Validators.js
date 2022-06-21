export function validateUserName(userName) {
    if(userName && userName.length > 0) {
        if(userName.length >= 2) {
            return {
                status: 1
            }
        }
        else {
            return {
                status: 0,
                errMsg: 'User name should be 2 or more charachters.'
            }    
        }
    }
    else {
        return {
            status: 0,
            errMsg: 'Please enter your user name.'
        }
    }
}

export function validatePassword(password) {
    if (password && password.length > 0) {
      if (password.length >= 8) {
        const re = new RegExp(
            "^(?=.*[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])"
        );
        if (re.test(String(password))) {
          return {
            status: 1,
          };
        }
        return {
          status: 0,
          errMsg: "Invalid password. Password must contain at least one character, one number, and one special character ",
        };
      }
      return {
        status: 0,
        errMsg: "Password is short. Password must be at least 8 characters.",
      };
    }
    return {
      status: 0,
      errMsg: "Empty Password. Please type ypur password",
    };
};  