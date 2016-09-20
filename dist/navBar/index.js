/**
 * Created by Administrator on 2016/9/20.
 */
var NavBar = React.createClass({displayName: "NavBar",
    render:function(){
        return React.createElement(NavMenu, {data: this.props.data})
    }
});
var NavMenu = React.createClass({displayName: "NavMenu",
    render:function(){
        var menuItemList = this.props.data.map(function(item){
            return React.createElement(MenuItem, {name: item.itemName, linkData: item.link})
        });
        return React.createElement("ul", {className: "navMenu"}, 
                    menuItemList
                )
    }
});
var MenuItem = React.createClass({displayName: "MenuItem",
    getInitialState:function(){
        return {
            spread:true
        }
    },
    render:function(){
        return React.createElement("li", {className: "menuItem", ref: "menuItem"}, 
                    React.createElement("span", null, this.props.name), 
                    React.createElement(LinkList, {linkData: this.props.linkData, spread: this.state.spread})
                )
    },
    mouseEnter:function(){
        this.setState({
            spread:false
        })
    },
    mouseLeave:function(){
        this.setState({
            spread:true
        })
    },
    componentDidMount:function(){
        var li = this.refs.menuItem;
        var _self = this;
        $(li).hover(_self.mouseEnter,_self.mouseLeave);
    }
});
var LinkList = React.createClass({displayName: "LinkList",
    style:{
        height:"0"
    },
    componentWillReceiveProps:function(){
        if(this.props.spread){
            this.style.height = "170px";
        }else{
            this.style.height = "0";
        }
    },
    render:function(){
        var navLinkList =  this.props.linkData.map(function(item){
            return  React.createElement(NavLink, {linkimg: item.img, linkName: item.linkName})
        });
        return React.createElement("ul", {className: "linkList", ref: "cur"}, 
                    navLinkList
                )
    },
    componentDidUpdate:function(){
        var _self = this;
        $(this.refs.cur).stop(false,true).animate({
            height:_self.style.height
        },400);
    }
});
var NavLink = React.createClass({displayName: "NavLink",
    render:function(){
        return React.createElement("li", {className: "navLink"}, 
                    React.createElement("a", {href: "#"}, 
                        React.createElement("img", {src: this.props.linkimg}), 
                        React.createElement("p", null, this.props.linkName)
                    )
                )
    }
});
//demo需要的数据
var data = [
    {
        "itemName":"产品",
        "link":[
            {
                "img":"picDesc1.jpg",
                "linkName":"Jquery基础教程"
            },
            {
                "img":"picDesc2.jpg",
                "linkName":"React精髓"
            },
            {
                "img":"picDesc3.jpg",
                "linkName":"Javascript高级教程"
            },
            {
                "img":"picDesc4.jpg",
                "linkName":"页面布局与样式"
            }
        ]
    },
    {
        "itemName":"服务",
        "link":[
            {
                "img":"picDesc5.jpg",
                "linkName":"产品理念"
            },
            {
                "img":"picDesc6.jpg",
                "linkName":"在线客服"
            },
            {
                "img":"picDesc7.jpg",
                "linkName":"售后服务"
            },
            {
                "img":"picDesc8.jpg",
                "linkName":"优惠政策"
            }
        ]
    }
];
ReactDOM.render(React.createElement(NavBar, {data: data}),document.getElementById('navBar'));