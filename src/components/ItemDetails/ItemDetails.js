import React from "react"
import "./ItemDetails.css"

const Record = ({item, field, label}) =>  {
    return (
      <li className="list-group-item">
          <dl>
              <dt className="term">{label}</dt>
              <dd>{item[field]}</dd>
          </dl>
      </li>
    )
}

export {Record}

export default class ItemDetails extends React.Component {

    state = {
        item: null,
        image: null
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId ||
          this.props.getData !== prevProps.getData ||
          this.props.getImageUrl !== prevProps.getImageUrl) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData, getImageUrl} = this.props
        if (!itemId) {
            return
        }
        getData(itemId)
          .then((item) => {
             this.setState({
                 item,
                 image: getImageUrl(item)
             })
          })
    }


    render() {
        const {item, image} = this.state

        if(!item) {
            return <span>Select a person from a list</span>
        }

        return (
          <div className="item-detail">
              <img src={image} alt={item.name}/>
              <div className="item-detail-body">
                  <h4>{item.name}</h4>
                  <ul className="list-group list-group-flush">
                      {
                          React.Children.map(this.props.children, (child) => {
                             return React.cloneElement(child, { item })
                          })
                      }
                  </ul>
              </div>
          </div>
        )
    }
}
