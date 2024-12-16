function Menu({onSelectVideo}) {
    function clickHandler(event) {
      const name = event.target.value;
      onSelectVideo(name);
    }
      return (
            <form onClick={clickHandler}>
                <input type="radio" name="src" value="fast"/> fast
                <input type="radio" name="src" value="slow" /> slow
                <input type="radio" name="src" value="cute" /> cute
                <input type="radio" name="src" value="eek" /> eek
            </form>
          );
  };
  
  export default Menu;