/**
 * 列表区可显示所有物料
 */
import { ElButton, ElInput } from "element-plus";

function createEditorConfig() {
    const components = []
    const componentMap = {}

    return {
        components,
        componentMap,
        register: (component) => {
            components.push(component)
            componentMap[component.key] = component
        }
    }
}

export let registerConfig = createEditorConfig()


registerConfig.register({
    key: 'text',
    label: '文本',
    preview: () => '预览文本',
    render: () => '渲染文本'
})
registerConfig.register({
    key: 'button',
    label: '按钮',
    preview: () => <ElButton>预览按钮</ElButton>,
    render: () => <ElButton>渲染按钮</ElButton>
})
registerConfig.register({
    key: 'input',
    label: '输入框',
    preview: () => <ElInput placeholder="请输入"></ElInput>,
    render: () => <ElInput placeholder="请输入"></ElInput>
})
