import { defineComponent, ref, computed } from 'vue'
import "./editor.scss";
import Block from "./block";
import { registerConfig as config } from "../utils/editor-config.jsx";
import { provide } from "vue";

export default defineComponent({
    props: {
        data: {
            type: Object,
            required: true
        }
    },


    setup(props) {
        const myObject = ref(props.data)

        const containerStyle = computed(() => ({
            width: `${myObject.value.container.width}px`,
            height: `${myObject.value.container.width}px`,
        }))

        provide("config", config);

        const render = () => {

            return (
                <div className='editor'>
                    <div className='editor-left'>
                        {
                            config.components.map(component => (
                                <div>{component.preview()}</div>
                            ))
                        }
                    </div>
                    <div className='editor-center'>
                        <div className='editor-center-top'>
                            上
                        </div>
                        <div className='editor-center-main' style={containerStyle.value}>
                            {
                                myObject.value.blocks.map(block => <Block block={block}></Block>)
                            }
                        </div>
                    </div>
                    <div className='editor-right'>
                        右侧
                    </div>
                </div>
            )
        }

        return render
    }
})
