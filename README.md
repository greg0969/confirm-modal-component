# NPM-SIMPLE-MODAL

[NPM-SIMPLE-MODAL](https://www.npmjs.com/package/npm-basic-modal)

## Installation

```
npm install npm-basic-modal
```

## How to use

### Basic

#### Standalone component

    import Modal from 'npm-basic-modal';

    const YourComponent = ({show, setShow}) => {
        return (

            {/* Modal display */}
            <Modal show={show} setShow={setShow} closeAnywhere={true} showIcon={true}>

                {/* Modal content */}
                <span> Modal customized text </span>

                {/* If you want to use your own close component use the prop showIcon={false} and add your component like here */}
                <button onClick={() => setShow(False)}>Close</button> 

            </Modal>
        )
    }

#### Display modal in your app
    
    import YourComponent from './YourComponent';

    const App = () => {
        const [show, setShow] = useState(false);

        return (
            {/* Exemple of trigger */}
            <button onClick={() => setShow(true)}>
                Show modal
            </button>

            {/* Modal display */}
            <div>
                <YourComponent show={show} setShow={setShow} />
            </div>
        )
    }


### Props
`show`: Boolean. Show or hide the modal.  
`setShow`: Function. Set the show state.  
`closeAnywhere`: Boolean. Close the modal when click outside.  
`showIcon`: Boolean. Show or hide the basic close icon.  
`overlayClassname`: String. Customize the overlay classname.  
`sectionClassname`: String. Customize the section classname.  
`iconClassname`: String. Customize the icon classname.  
`overlayStyle`: Object. Customize the overlay with inline-style.  
`sectionStyle`: Object. Customize the section with inline-style.  
`iconStyle`: Object. Customize the icon with inline-style.  