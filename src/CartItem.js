import React from "react";

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            title: 'Mobile Phone',
            price: 79,
            qty: 3,
            img: ''
        }
    }

    increaseQty = () => {
        // console.log(this.state)
        // this.state.qty += 1;

        //setstate form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // }, () => {})

        //setstate form 2 - use thisb if prevsState is required
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        }, () => {})
    }

    decreaseQty = () => {
        // console.log(this.state)
        // this.state.qty += 1;

        if(this.state.qty == 0){
            return;
        }

        //setstate form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // }, () => {})

        //setstate form 2 - use thisb if prevsState is required
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        }, () => {})
    }
    render() {
        const {title, price, qty} = this.state
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* {} */}
                        <img alt="increase" className="action-icons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAV1BMVEUAfID///8Ad3uXt7oAdHgAcHX2+vrn7/AdfIDt9PSjwcNUl5qLs7VupKcjhYhdnJ+609Q5h4vd6erR4OFtnqHI3Nwsgoayzc9alZhIjZGcvr/I19g/jpFP4/BsAAADhElEQVRogcWb63qDIAyGYwYeUKedPc15/9c5q21Xz0HovvxrH/ElICGEhAJ7SarSZHnafFIrn02aZ6askh0vIluuKWJmpZiZ7sL977gwtj2wgUcmPbN6QsfSduGcmugd8KS+Kr0IfnZAq2st1l8ILwuttsAPUboo/cFDw9s6D/VnE3qBJxmLlX5Rn7Pt0d+Ch3W8A93h43pL+w14ediJ7vCHjblfhUeF3o++iS5WV94avLb7zOaEdb0LHjWOat+Vb5aVX4SX7Kx2L8yLM78Ezxw+tLGozA6eemS39NQCHh48DflD+DC75OfgX7GMzUrr5U1u+Gj8JYNXMjbrozmdzFG2HjmuJHAp+/v+tup7N30CF445p89ZDFMhfTLyY3gonO/zy56VnEVNOB5/dWO48DvXl9dGF5kt5MM6vJCusdFbZMKj9T58i9SucT58Sy7s88jWDeCl1K7xxxD+IR0wVS7BI7Fd2w0njhbgzX/Am3l4Ld+/98Pp1bv4g0cWvoMDnHQ0AxevMkc4F1N4aeM0ucBJl2N4eLBo7gan5+b+gNdWrosbXNVDeBLbtHaEU5wM4Jb+oiP8YWV7eGjpsznCicMXuLF0Vl3hyrzAbZ1VVzjxH9xqjXuB92u9g9sYNz/w3szd4In1idAZTjq5w+0MjB94Z2hu8KttSw9wuvbwyP5Q6AGuog5u7IMAHuDadHDZgcM3/OZGk/S84Rt+O/NQUO2IA/iAc9XCbe26L3hr38nevHmCt0aOAjs3wh+c4oCSPe28wDmhCgevaOFwyKuix3C9/vwsQpU0+7Fryj9W5WcI/1l/Oqc5I6oMZdNu8fkSeJbLeQaT0fRcz+meO7INSaZGnHOa/MnfkusRawknETNOqZnM90y0zodUk3lv6HPcn+N72EFwHKs+Rj9d6jeIYBPRp3fBT9tOCxT+r8MO/eCgSw1qZKDmFbqxQLdUqDMBdaOgDiTUdcYeGqDHJehBEXpEhgYHsGERaEAIGgrDBgGh4U9o4Bcb8oYG+7HXHNALHujVFvZSD3qdib3IhV5hYy/vsWkL0IQNbKoKNkkHmp6ETcx6e0paMWo2/AlNxsOmIUITMLGpp9ikW2y6MTbRupUCl2IeYJPrsWUF3goq1J6CigBaShJgi2iCW/mQA96tfCjAFk4F0JKxTntcsVwnuDLBToAFkp3gSkN7wRXF/vXAUznwL9tkN/VYYijiAAAAAElFTkSuQmCC" onClick={this.increaseQty} />
                        <img alt="decrease" onClick={this.decreaseQty} className="action-icons" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNaApxfLCrV97xu1WdMjek97o4a2B-HEUV7mTpERp1A&s" />
                        <img alt="delete" className="action-icons" src="data:image/png;base64,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" />
                    </div>
                </div>
            </div>
        )
    }
}


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 10,
        backgroundColor: '#777'
    }
}
export default CartItem;