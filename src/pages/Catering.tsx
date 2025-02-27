import React, { useState, CSSProperties } from "react";

const Catering: React.FC = () => {
  const [formData, setFormData] = useState({
    mealType: "",
    cuisineStyle: "",
    dietaryRequirements: [] as string[],
    beveragePackage: "",
    eventDate: "",
    guestCount: "",
    specialRequests: "",
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDietarySelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const updatedDietary = checked
      ? [...formData.dietaryRequirements, value]
      : formData.dietaryRequirements.filter(item => item !== value);
    
    setFormData({ ...formData, dietaryRequirements: updatedDietary });
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      handleSubmit();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Add your submission logic here
    alert("Catering preferences submitted! We'll be in touch shortly.");
    setCurrentStep(1);
    setFormData({
      mealType: "",
      cuisineStyle: "",
      dietaryRequirements: [],
      beveragePackage: "",
      eventDate: "",
      guestCount: "",
      specialRequests: "",
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h3 style={styles.stepTitle}>Event Details</h3>
            
            <div style={styles.formGroup}>
              <label style={styles.formLabel} htmlFor="mealType">Meal Type</label>
              <select 
                id="mealType" 
                name="mealType" 
                value={formData.mealType} 
                onChange={handleInputChange}
                required
                style={styles.formSelect as CSSProperties}
              >
                <option value="">-- Select Meal Type --</option>
                {["Breakfast", "Lunch", "Dinner", "Cocktail", "Buffet", "Tea Time"].map(meal => (
                  <option key={meal} value={meal}>{meal}</option>
                ))}
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel} htmlFor="cuisineStyle">Cuisine Style</label>
              <select 
                id="cuisineStyle" 
                name="cuisineStyle" 
                value={formData.cuisineStyle} 
                onChange={handleInputChange}
                required
                style={styles.formSelect as CSSProperties}
              >
                <option value="">-- Select Cuisine --</option>
                {["Italian", "Mexican", "Asian", "Mediterranean", "American", "Indian", "French"].map(cuisine => (
                  <option key={cuisine} value={cuisine}>{cuisine}</option>
                ))}
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel} htmlFor="eventDate">Event Date</label>
              <input 
                type="date" 
                id="eventDate" 
                name="eventDate" 
                value={formData.eventDate} 
                onChange={handleInputChange}
                style={styles.formInput}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel} htmlFor="guestCount">Number of Guests</label>
              <input 
                type="number" 
                id="guestCount" 
                name="guestCount" 
                value={formData.guestCount} 
                onChange={handleInputChange}
                style={styles.formInput}
                min="1"
                required
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step-content">
            <h3 style={styles.stepTitle}>Dietary Preferences</h3>
            
            <div style={styles.formGroup}>
              <label style={styles.formLabel} className="dietary-label">Dietary Requirements</label>
              <div style={styles.checkboxGroup}>
                {["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Nut-Free", "Halal", "Kosher"].map(dietary => (
                  <div key={dietary} style={styles.checkboxItem}>
                    <input
                      type="checkbox"
                      id={dietary}
                      value={dietary}
                      checked={formData.dietaryRequirements.includes(dietary)}
                      onChange={handleDietarySelection}
                      style={{ marginRight: "8px" }}
                    />
                    <label htmlFor={dietary}>{dietary}</label>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel} htmlFor="beveragePackage">Beverage Package</label>
              <select 
                id="beveragePackage" 
                name="beveragePackage" 
                value={formData.beveragePackage} 
                onChange={handleInputChange}
                style={styles.formSelect as CSSProperties}
                required
              >
                <option value="">-- Select Beverage Package --</option>
                {["Non-Alcoholic", "Beer & Wine", "Full Bar", "Premium Bar", "Champagne Toast"].map(beverage => (
                  <option key={beverage} value={beverage}>{beverage}</option>
                ))}
              </select>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step-content">
            <h3 style={styles.stepTitle}>Additional Information</h3>
            
            <div style={styles.formGroup}>
              <label style={styles.formLabel} htmlFor="specialRequests">Special Requests or Additional Information</label>
              <textarea 
                id="specialRequests" 
                name="specialRequests" 
                value={formData.specialRequests} 
                onChange={handleInputChange}
                style={styles.formTextarea}
                rows={5}
                placeholder="Please let us know if you have any special requests or additional information..."
              />
            </div>

            <div style={styles.summary}>
              <h4 style={styles.summaryHeading}>Catering Summary</h4>
              <ul style={styles.summaryList}>
                <li style={styles.summaryItem}><strong>Meal Type:</strong> {formData.mealType || "Not selected"}</li>
                <li style={styles.summaryItem}><strong>Cuisine Style:</strong> {formData.cuisineStyle || "Not selected"}</li>
                <li style={styles.summaryItem}><strong>Event Date:</strong> {formData.eventDate || "Not specified"}</li>
                <li style={styles.summaryItem}><strong>Guest Count:</strong> {formData.guestCount || "Not specified"}</li>
                <li style={styles.summaryItem}><strong>Beverage Package:</strong> {formData.beveragePackage || "Not selected"}</li>
                <li style={styles.summaryItem}><strong>Dietary Requirements:</strong> {formData.dietaryRequirements.length > 0 ? formData.dietaryRequirements.join(", ") : "None"}</li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Updated styles to ensure full page display
  const styles = {
    cateringContainer: {
      backgroundColor: "#FEF9E7", // Light cream background like in the image
      minHeight: "100vh",
      width: "100vw",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#333",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column" as "column",
      position: "absolute" as "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflowX: "hidden" as "hidden"
    },
    cateringHeader: {
      textAlign: "center" as "center",
      padding: "60px 20px",
      backgroundColor: "#FEF9E7", // Matching the background in the image
      borderBottom: "1px solid #eaeaea",
      width: "100%"
    },
    heading: {
      margin: 0,
      fontSize: "2.5rem",
      color: "#2E3A4D", // Dark blue/navy color for headings from the image
      fontWeight: 600,
    },
    subheading: {
      margin: "15px 0 0",
      fontSize: "1.2rem",
      color: "#555", // Darker subheading like in the image
    },
    formContainer: {
      flex: 1,
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto",
      padding: "40px 20px"
    },
    primaryButton: {
      backgroundColor: "#18B83A", // Green color from the image
      color: "#FFFFFF", // White text
      border: "none",
      padding: "12px 24px",
      fontSize: "1rem",
      fontWeight: 600,
      borderRadius: "4px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 2px 8px rgba(24, 184, 58, 0.3)" // Light shadow for the green button
    },
    secondaryButton: {
      backgroundColor: "transparent", // Outlined style
      color: "#333",
      border: "1px solid #ccc",
      padding: "12px 24px",
      fontSize: "1rem",
      fontWeight: 600,
      borderRadius: "4px",
      cursor: "pointer",
      transition: "all 0.3s ease"
    },
    progressContainer: {
      marginBottom: "40px"
    },
    progressBar: {
      height: "4px",
      backgroundColor: "#e0e0e0",
      marginBottom: "20px"
    },
    progress: (width: string) => ({
      height: "100%",
      backgroundColor: "#18B83A", // Green from the image
      transition: "width 0.3s ease",
      width
    }),
    stepIndicators: {
      display: "flex",
      justifyContent: "center"
    },
    stepIndicator: (isActive: boolean) => ({
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      backgroundColor: isActive ? "#18B83A" : "#e0e0e0", // Green from the image for active step
      color: isActive ? "#FFFFFF" : "#7f8c8d", // White text on active step
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 10px",
      transition: "all 0.3s ease",
      boxShadow: isActive ? "0 0 0 2px rgba(24, 184, 58, 0.3)" : "none" // Light shadow for active step
    }),
    cateringForm: {
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      padding: "30px"
    },
    stepTitle: {
      marginTop: 0,
      marginBottom: "25px",
      color: "#2E3A4D", // Dark blue/navy color from the image
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    formGroup: {
      marginBottom: "20px"
    },
    formLabel: {
      display: "block",
      marginBottom: "8px",
      fontWeight: 600,
      color: "#2E3A4D" // Dark blue/navy color from the image
    },
    formSelect: {
      width: "100%",
      padding: "12px 15px",
      border: "1px solid #dcdfe6",
      borderRadius: "4px",
      fontSize: "1rem",
      color: "#2c3e50",
      backgroundColor: "white",
      // Fix for the TypeScript error - we're using type assertion now
      WebkitAppearance: "none",
      MozAppearance: "none",
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8.825L1.175 4 0 5.175 6 11.175 12 5.175 10.825 4 6 8.825z'/%3E%3C/svg%3E\")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 15px center"
    },
    formInput: {
      width: "100%",
      padding: "12px 15px",
      border: "1px solid #dcdfe6",
      borderRadius: "4px",
      fontSize: "1rem",
      color: "#2c3e50"
    },
    formTextarea: {
      width: "100%",
      padding: "12px 15px",
      border: "1px solid #dcdfe6",
      borderRadius: "4px",
      fontSize: "1rem",
      color: "#2c3e50",
      resize: "vertical" as "vertical"
    },
    checkboxGroup: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
      gap: "10px",
      marginTop: "10px"
    },
    checkboxItem: {
      display: "flex",
      alignItems: "center"
    },
    formNavigation: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "30px",
      paddingTop: "20px",
      borderTop: "1px solid #eaeaea"
    },
    summary: {
      marginTop: "30px",
      padding: "20px",
      backgroundColor: "#FEF9E7", // Light cream background from the image
      borderRadius: "4px"
    },
    summaryHeading: {
      marginTop: 0,
      marginBottom: "15px",
      color: "#2E3A4D", // Dark blue/navy color from the image
      fontWeight: 600,
    },
    summaryList: {
      listStyleType: "none",
      padding: 0,
      margin: 0
    },
    summaryItem: {
      marginBottom: "8px"
    }
  };

  return (
    <div style={styles.cateringContainer}>
      <div style={styles.cateringHeader}>
        <h1 style={styles.heading}>Exquisite Catering Services</h1>
        <p style={styles.subheading}>Elevate your event with our custom catering options</p>
      </div>
      
      <div style={styles.formContainer}>
        <div style={styles.progressContainer}>
          <div style={styles.progressBar}>
            <div style={styles.progress(`${(currentStep / totalSteps) * 100}%`)}></div>
          </div>
          
          <div style={styles.stepIndicators}>
            {Array.from({ length: totalSteps }, (_, i) => (
              <div 
                key={i} 
                style={styles.stepIndicator(currentStep >= i + 1)}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        
        <div style={styles.cateringForm}>
          {renderStep()}
          
          <div style={styles.formNavigation}>
            {currentStep > 1 && (
              <button 
                type="button"
                style={styles.secondaryButton}
                onClick={handlePrevStep}
              >
                Back
              </button>
            )}
            
            <button 
              type="button"
              style={styles.primaryButton}
              onClick={handleNextStep}
            >
              {currentStep < totalSteps ? "Continue" : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add this to ensure the component styles apply properly
const AppWrapper: React.FC = () => {
  // This style ensures any parent container doesn't limit the component
  const wrapperStyle: React.CSSProperties = {
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden"
  };

  return (
    <div style={wrapperStyle}>
      <style dangerouslySetInnerHTML={{
        __html: `
          html, body, #root {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow-x: hidden;
          }
        `
      }} />
      <Catering />
    </div>
  );
};

export default AppWrapper;