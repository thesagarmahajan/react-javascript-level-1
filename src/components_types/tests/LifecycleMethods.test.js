import renderer from 'react-test-renderer'
import LifecycleMethods from '../LifecycleMethods'

test("Shallow Rendering", ()=>{
    const tree = renderer.create(<LifecycleMethods />).toJSON()
    console.log(tree.props)
    // renderer.act(()=>{
    //     tree.props.handleComponentMount()
    // })
    expect(tree).toMatchSnapshot()
})

