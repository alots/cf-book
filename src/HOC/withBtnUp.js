import React, { useState, useEffect } from "react";

const withBtnUp = (EnhancedComponent, visibleFrom) =>
  function withBtnUp(props) {
    const [visible, setVisible] = useState(false);
    const handleScroll = () => {
      const currentY = window.scrollY;
      let scroll = currentY > visibleFrom;
      setVisible(scroll);
      
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const btnClasses = visible ? "btn-up" : "hidden";

    return (
      <EnhancedComponent
        {...props}
        onClick={() => window.scrollTo(0, 0)}
        btnClasses={btnClasses}
      > UP </EnhancedComponent>
    );
  };

export default withBtnUp;
