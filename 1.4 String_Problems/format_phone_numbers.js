function formatPhoneNumber(phone) {
    // Remove any non-digit characters from the phone number
    let cleaned = phone.replace(/D/g, '');
    
    // Format the cleaned string into (123) 456-7890
    let formatted = '(' + cleaned.substring(0, 3) + ') ' + cleaned.substring(3, 6) + '-' + cleaned.substring(6, 10);
    
    return formatted;
  }
  
  // Example usage
  let phoneNumber = '1234567890';
  console.log(formatPhoneNumber(phoneNumber)); // Output: '(123) 456-7890'