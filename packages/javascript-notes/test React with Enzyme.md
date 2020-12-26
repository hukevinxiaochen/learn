# test React with Enzyme
#use/javascript

[[Study Web Development - Fullstack]]
[[20200822]]

- [ ] [How to Test React Components: the Complete Guide](https://www.freecodecamp.org/news/testing-react-hooks/)
## References
* [Introduction · Enzyme](https://enzymejs.github.io/enzyme/)
## Cases
* To simulate an event on a ReactWrapper object in Enzyme [simulate(event, data) · Enzyme](https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/simulate.html).

- [ ] Do events that modify state on a parent component get simulated correctly in Enzyme? How would we approach solving that problem?

My motivation for asking this is based on the following observations:

First, given components and state set up as follows:
```javascript
class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      adopted: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const nState = this.state.adopted ? false : true;
    this.setState({adopted: nState});
  }

  render() {
    const status = this.state.adopted;
    return (
      <div>
        <h1>Adoption Center</h1>
        <PetList pets={samplePets} toggle={this.toggle} status={status} />
      </div>
    );
  }
}

//---------------------------------------------
const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
const PetList = (props) => {
  // const toggle = props.toggle;
  // const status = props.status;
  return (
      <div className="pet-list">
        <SinglePet pet={cody} toggle={toggle} status={status} />
      </div>
  );
}

//------------------------------------------------
import React from 'react';

const SinglePet = (props) => {
  const {name, description, species} = props.pet;
  const toggle = props.toggle;
  const status = props.status ? 'Adopted!' : 'Available';
  return (<div className={props.status ? 'single-pet adopted' : 'single-pet'}>
    <h1>{name}</h1>
    <p>Description: {description}</p>
    <p>Species: {species}</p>
    <p>Status: {status}</p>
    <button onClick={toggle}>Toggle Status</button>
    </div>);
}
```

```javascript
  it("the 'Toggle Status' button toggles 'Available' to 'Adopted!'", () => {
    const wrapper = mount(<SinglePet pet={rigatoni} />);
    const toggleAdoptedButton = findButton(wrapper, 'Toggle Status');
    console.log("SinglePet component -->", wrapper.html());
    console.log("Toggle Status button -->", toggleAdoptedButton.html());

    expect(toggleAdoptedButton).to.have.length(1);

    // The component should render "Available for adoption" and not "Adopted!"
    expect(wrapper.text()).to.contain('Available');
    expect(wrapper.text()).to.not.contain('Adopted!');

    // Click the button!
    toggleAdoptedButton.simulate('click');
    console.log("A click was simulated");
    console.log("SinglePet component after 1 click -->", wrapper.html());

    // NOW the component should render "Adopted!"
    expect(wrapper.text()).to.not.contain('Available');
    expect(wrapper.text()).to.contain('Adopted!');
  });
```
Finally, the associated behavior documented below:

> Achieve toggling between Available and Adopted  
>   
>     also achieved toggling class adopted with click events.  
>   
>     **NOTE** Tests in Tier 1 do not pass, despite the desired behavior being  
>     implemented in my code.  
>   
>     In one case, our error message is:  
>     the 'Toggle Status' button toggles 'Available' to 'Adopted!':  
>     │     AssertionError: expected 'RigatoniDescription: A flaming hot  
>     cheetoh in feline formSpecies:catStatus: AvailableToggle Status' to not include 'Available'  
>   
>     This test must be set up improperly because we can see in the browser  
>     quite clearly that the Status does not include Available and in fact  
>     contains Adopted!  
>   
>     Another case: the 'Toggle Status' button toggles the 'adopted' css  
>     class:  
>     AssertionError: expected <SinglePet /> to have a 'adopted' class, but it  
>     has 'single-pet'  
>   
>     Again, looking in the browser, my SinglePet componenet clearly gets the  
>     adopted class toggled with the Toggle Status button.  

Finally, behavior that I did not describe above, but which is also concerning, is that when I try to interpolate the value of the prop when it is merely a string - it console.logs as undefined and the wrapper.text() test code returns a string that is empty where I would have expected the string to be.

Upon looking at the Enzyme documentation and console logging through the test code, it dawned on me that state should be managed within the SinglePet component itself. Clearly I should not manage individual pet-level adoption status at the Root component level. This makes little sense. However, it still begs the question of how I would be able to test something like this.

When I refactor so that SinglePet is a class component with instance method toggle and managing state at that level, the tests pass and my test output is as expected:

```
  Tier 1: SinglePet component
    ✓ renders a pet's name, description, and species passed in as props
    ✓ renders different name, description, and species if passed different props
    ✓ renders a 'Toggle Status' button
SinglePet component --> <div class="single-pet"><h1>Rigatoni</h1><p>Description: A flaming hot cheetoh in feline form</p><p>Species: cat</p><p>Status: Available</p><button>Toggle Status</button></div>
Toggle Status button --> <button>Toggle Status</button>
A click was simulated
SinglePet component after 1 click --> <div class="single-pet adopted"><h1>Rigatoni</h1><p>Description: A flaming hot cheetoh in feline form</p><p>Species: cat</p><p>Status: Adopted!</p><button>Toggle Status</button></div>
    ✓ the 'Toggle Status' button toggles 'Available' to 'Adopted!'
    ✓ the 'Toggle Status' button toggles 'Adopted!' to 'Available'
    ✓ the 'Toggle Status' button toggles the 'adopted' css class
```