const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzKFiGufrpnVOdCEsTuMyUPLejnEru8shNFcMLdaJXSlJddcbQJm6ohGJTGtfaYa8Vs/exec";
  
export default SCRIPT_URL;
/* ---------------- LOGIN ---------------- */

export const login = async (email, password) => {
  try {
    const res = await fetch(
      `${SCRIPT_URL}?action=login&email=${encodeURIComponent(
        email
      )}&password=${encodeURIComponent(password)}`
    );

    return await res.json();
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Server Error",
    };
  }
};

/* ---------------- GET LEADS ---------------- */

export const getLeads = async () => {
  try {
    const res = await fetch(`${SCRIPT_URL}?action=getLeads`);

    return await res.json();
  } catch (error) {
    console.error(error);

    return [];
  }
};

/* ---------------- DELETE LEAD ---------------- */

export const deleteLead = async (row) => {
  try {
    const res = await fetch(
      `${SCRIPT_URL}?action=deleteLead&row=${row}`
    );

    return await res.json();
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Server Error",
    };
  }
};

/* ---------------- CONTACT FORM ---------------- */

export const submitContact = async (form) => {
  try {
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      body: formData,
    });

    return await res.json();
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Server Error",
    };
  }
};