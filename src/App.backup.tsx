// import {
//     ButtonHTMLAttributes,
//     createContext,
//     createRef,
//     InputHTMLAttributes,
//     ReactNode,
//     useContext,
//     useEffect,
//     useRef,
//     useState,
// } from "react"
// import uniqueId from "lodash.uniqueid"

import { useState } from "react"
import { AppContext, AppContextProps } from "./AppContext"
import Button from "./components/Button"
import Field from "./components/Field"
import Input from "./components/Input"
import Label from "./components/Label"
import Modal from "./components/Modal"

export default function App() {
    const [openModalId, setOpenModalId] = useState("")
    const [openModalTriggerId, setOpenModalTriggerId] = useState("")
    const [modal, setModal] = useState(false)

    const context: AppContextProps = {
        openModalId,
        setOpenModalId: (id) => setOpenModalId(id),
        openModalTriggerId: openModalTriggerId,
        setOpenModalTriggerId: (id) => setOpenModalTriggerId(id),
    }

    return (
        <AppContext.Provider value={context}>
            <table>
                <tbody>
                    <tr>
                        <th colSpan={2}>App</th>
                    </tr>
                    <tr>
                        <th>Open Modal</th>
                        <td>{openModalId || "NONE"}</td>
                    </tr>
                    <tr>
                        <th>Open Modal Trigger ID</th>
                        <td>{openModalTriggerId || "NONE"}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <h3>App</h3>
                <Field>
                    <Label>Label</Label>
                    <Input />
                </Field>
                <Field>
                    <Label>Label</Label>
                    <Input />
                </Field>
                <Field>
                    <Label>Label</Label>
                    <Input />
                </Field>
                <Button onClick={() => setModal(!modal)}>Open Modal</Button>
            </div>
            <Modal id="modal-id" open={modal}>
                <h3>Modal</h3>
                <Field>
                    <Label>Label</Label>
                    <Input />
                </Field>
                <Field>
                    <Label>Label</Label>
                    <Input />
                </Field>
                <Field>
                    <Label>Label</Label>
                    <Input />
                </Field>
                <div>
                    <Button onClick={() => setModal(false)}>Cancel</Button>
                    &nbsp;
                    <Button onClick={() => setModal(false)}>Save</Button>
                </div>
            </Modal>
        </AppContext.Provider>
    )
}

// interface FocusManagementContextProps {
//     triggerEl: any
// }
// const FocusManagementContext = createContext<FocusManagementContextProps>({
//     triggerEl: null,
// })

// export default function App() {
//     const [isModal1Open, setModal1Open] = useState(false)
//     const [isModal2Open, setModal2Open] = useState(false)
//     const [isModal3Open, setModal3Open] = useState(false)

//     const nonModalInputTabIndex =
//         isModal1Open || isModal2Open || isModal3Open ? -1 : undefined
//     const modal1InputTabIndex = isModal1Open ? undefined : -1
//     const modal2InputTabIndex = isModal2Open ? undefined : -1
//     const modal3InputTabIndex = isModal3Open ? undefined : -1

//     const [triggerEl, setTriggerEl] = useState<HTMLElement | null>(null)
//     const context: FocusManagementContextProps = {
//         triggerEl,
//     }

//     return (
//         <FocusManagementContext.Provider value={context}>
//             <p>Trigger Element: {!!triggerEl ? "true" : "false"}</p>
//             <div>
//                 <p>This is a test page.</p>
//                 <p>
//                     <button
//                         onClick={(event) => {
//                             setModal1Open(!isModal1Open)
//                             setTriggerEl(event.currentTarget)
//                         }}
//                         tabIndex={nonModalInputTabIndex}
//                         type="button"
//                     >
//                         Modal 1
//                     </button>
//                     <button
//                         onClick={(event) => {
//                             setModal2Open(!isModal2Open)
//                             setTriggerEl(event.currentTarget)
//                         }}
//                         tabIndex={nonModalInputTabIndex}
//                         type="button"
//                     >
//                         Modal 2
//                     </button>
//                     <button
//                         onClick={(event) => {
//                             setModal3Open(!isModal3Open)
//                             setTriggerEl(event.currentTarget)
//                         }}
//                         tabIndex={nonModalInputTabIndex}
//                         type="button"
//                     >
//                         Modal 3
//                     </button>
//                 </p>
//                 <form>
//                     <Input
//                         type="text"
//                         placeholder="Input 1"
//                         tabIndex={nonModalInputTabIndex}
//                     />
//                     <Input
//                         type="text"
//                         placeholder="Input 2"
//                         tabIndex={nonModalInputTabIndex}
//                     />
//                     <Input
//                         type="text"
//                         placeholder="Input 3"
//                         tabIndex={nonModalInputTabIndex}
//                     />
//                 </form>
//                 <Modal id="test-modal-id" open={isModal1Open}>
//                     <h3>Modal 1</h3>
//                     <form>
//                         <Field>
//                             <Label>Input 1:</Label>&nbsp;
//                             <Input
//                                 id="test-id"
//                                 type="text"
//                                 placeholder="Input 1"
//                                 tabIndex={modal1InputTabIndex}
//                             />
//                         </Field>
//                         <Field>
//                             <Label>Input 2:</Label>&nbsp;
//                             <Input
//                                 type="text"
//                                 placeholder="Input 2"
//                                 tabIndex={modal1InputTabIndex}
//                             />
//                         </Field>
//                         <Field>
//                             <Label>Input 3:</Label>&nbsp;
//                             <Input
//                                 type="text"
//                                 placeholder="Input 3"
//                                 tabIndex={modal1InputTabIndex}
//                             />
//                         </Field>
//                         <div>
//                             <button
//                                 onClick={() => {
//                                     triggerEl?.focus()
//                                     setModal1Open(!isModal1Open)
//                                 }}
//                                 tabIndex={modal1InputTabIndex}
//                                 type="button"
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 onClick={() => {
//                                     triggerEl?.focus()
//                                     setModal1Open(!isModal1Open)
//                                 }}
//                                 tabIndex={modal1InputTabIndex}
//                                 type="button"
//                             >
//                                 Save
//                             </button>
//                         </div>
//                     </form>
//                 </Modal>
//                 <Modal open={isModal2Open}>
//                     <h3>Modal 2</h3>
//                     <form>
//                         <Field>
//                             <Label>Input 1:</Label>&nbsp;
//                             <Input
//                                 type="text"
//                                 placeholder="Input 1"
//                                 tabIndex={modal2InputTabIndex}
//                             />
//                         </Field>
//                         <Field>
//                             <Label>Input 2:</Label>&nbsp;
//                             <Input
//                                 type="text"
//                                 placeholder="Input 2"
//                                 tabIndex={modal2InputTabIndex}
//                             />
//                         </Field>
//                         <Field>
//                             <Label>Input 3:</Label>&nbsp;
//                             <Input
//                                 type="text"
//                                 placeholder="Input 3"
//                                 tabIndex={modal2InputTabIndex}
//                             />
//                         </Field>
//                         <div>
//                             <button
//                                 onClick={() => {
//                                     setModal2Open(!isModal2Open)
//                                     triggerEl?.focus()
//                                 }}
//                                 tabIndex={modal2InputTabIndex}
//                                 type="button"
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 onClick={() => {
//                                     setModal2Open(!isModal2Open)
//                                     triggerEl?.focus()
//                                 }}
//                                 tabIndex={modal2InputTabIndex}
//                                 type="button"
//                             >
//                                 Save
//                             </button>
//                         </div>
//                     </form>
//                 </Modal>
//                 <Modal open={isModal3Open}>
//                     <h3>Modal 3</h3>
//                     <p>This is a modal.</p>
//                     <div>
//                         <button
//                             onClick={() => {
//                                 setModal3Open(!isModal3Open)
//                                 triggerEl?.focus()
//                             }}
//                             tabIndex={modal3InputTabIndex}
//                             type="button"
//                         >
//                             Cancel
//                         </button>
//                         <button
//                             onClick={() => {
//                                 setModal3Open(!isModal3Open)
//                                 triggerEl?.focus()
//                             }}
//                             tabIndex={modal3InputTabIndex}
//                             type="button"
//                         >
//                             Save
//                         </button>
//                     </div>
//                 </Modal>
//             </div>
//         </FocusManagementContext.Provider>
//     )
// }

// interface ModalContextProps {
//     modalId: string
//     modalOpen: boolean
//     firstFocusableId: string
//     setFirstFocusableId: (id: string) => void
// }
// const ModalContext = createContext<ModalContextProps>({
//     modalId: "",
//     modalOpen: false,
//     firstFocusableId: "",
//     setFirstFocusableId: () => {},
// })
// interface ModalProps {
//     children: ReactNode
//     open?: boolean
//     id?: string
// }
// function Modal({ children, id, open = false }: ModalProps) {
//     const [modalId] = useState(id || uniqueId("modal-"))
//     const [firstFocusableId, setFirstFocusableId] = useState("")

//     const context: ModalContextProps = {
//         modalId,
//         modalOpen: open,
//         firstFocusableId,
//         setFirstFocusableId: (id) => setFirstFocusableId(id),
//     }

//     return (
//         <ModalContext.Provider value={context}>
//             <div className="modal" id={modalId} hidden={!open}>
//                 <div>First: {firstFocusableId}</div>
//                 {children}
//             </div>
//         </ModalContext.Provider>
//     )
// }

// interface FieldContextProps {
//     id: string
// }
// const FieldContext = createContext<FieldContextProps>({
//     id: "",
// })
// interface FieldProps {
//     children: ReactNode
// }
// function Field({ children }: FieldProps) {
//     const [id] = useState(uniqueId("input-"))
//     const context: FieldContextProps = {
//         id,
//     }
//     return (
//         <FieldContext.Provider value={context}>
//             <div>{children}</div>
//         </FieldContext.Provider>
//     )
// }

// interface LabelProps {
//     children: ReactNode
// }
// function Label({ children }: LabelProps) {
//     const { id } = useContext(FieldContext)
//     return <label htmlFor={id}>{children}</label>
// }

// interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
// function Input({ id, ...props }: InputProps) {
//     const { id: contextId } = useContext(FieldContext)
//     const { firstFocusableId, modalId, setFirstFocusableId } =
//         useContext(ModalContext)

//     useEffect(() => {
//         if (modalId && firstFocusableId === "") {
//             setFirstFocusableId(id || contextId)
//         }
//     }, [modalId, firstFocusableId, setFirstFocusableId, id, contextId])

//     return <input id={id || contextId} {...props} />
// }

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
// function Button({ ...props }: ButtonProps) {
//     const buttonRef = useRef<HTMLButtonElement>(null)
//     return <button ref={buttonRef} {...props}></button>
// }
