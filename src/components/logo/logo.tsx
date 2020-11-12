import { defineComponent } from 'vue'
import { MediumOutlined } from '@ant-design/icons-vue'

export default defineComponent({
    name: 'MiLayoutSiderLogo',
    render() {
        const title = this.$g.title ?? '麦可易特网'
        const prefixCls = this.$tools.getPrefixCls('layout-sider-logo')
        let logo = (<MediumOutlined></MediumOutlined>)
        if (this.$g.logo) logo = (<img src={this.$g.logo} alt={this.$g.title}></img>)
        let slots = this.$slots.default
        if (!slots) {
            slots = (
                <a href="/" class={`${prefixCls}-site`}>
                    { logo }
                    <h1 innerHTML={title}></h1>
                </a>
            )
        }
        return (<div class={prefixCls}>{ slots }</div>)
    }
})