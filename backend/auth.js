import AsyncStorage from '@react-native-async-storage/async-storage';

// Register a new user
export const registerUser = async (name, email, password) => {
  try {
    const existingUsers = await AsyncStorage.getItem('users');
    let users = existingUsers ? JSON.parse(existingUsers) : [];

    // Check if email already exists
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
      return { success: false, message: "Email already in use." };
    }

    // Save user
    const newUser = { name, email, password };
    users.push(newUser);
    await AsyncStorage.setItem('users', JSON.stringify(users));

    return { success: true, message: "Account created successfully!" };
  } catch (error) {
    return { success: false, message: "Error registering user." };
  }
};

// Login user
export const loginUser = async (email, password) => {
  try {
    const existingUsers = await AsyncStorage.getItem('users');
    let users = existingUsers ? JSON.parse(existingUsers) : [];

    // Find user
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      // Store logged-in user
      await AsyncStorage.setItem('loggedInUser', JSON.stringify(user));
      return { success: true, user };
    } else {
      return { success: false, message: "Invalid email or password." };
    }
  } catch (error) {
    return { success: false, message: "Error logging in." };
  }
};

// Get logged-in user
export const getLoggedInUser = async () => {
  try {
    const user = await AsyncStorage.getItem('loggedInUser');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    return null;
  }
};

// Logout user
export const logoutUser = async () => {
  try {
    await AsyncStorage.removeItem('loggedInUser');
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
