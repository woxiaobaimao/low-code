import { defineComponent, ref, computed, inject } from 'vue'

export default defineComponent({
    props: {
        block: {
            type: Object,
            required: true
        }
    },


    setup(props) {
        const myObject = ref(props.block)


        const containerStyle = computed(() => ({
            top: `${myObject.value.top}px`,
            left: `${myObject.value.left}px`,
        }))

        const render = () => {

            const config = inject('config')

            const component = config.componentMap[props.block.key]
            const RenderComponent = component.render()
            return (
                <div className='block' style={containerStyle.value}>
                    {RenderComponent}
                </div>
            )
        }

        return render
    }
})
