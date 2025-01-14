"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { zoomOutVariants } from '@/lib/framer';
import { LabelInputContainer } from '@/app/contact/page';
import Input from '@/components/aceternity/form/input';
import { Check, Plus, Trash } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Task {
    id: number;
    text: string;
    done: boolean;
}

const ToDoApp: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>("");

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
            setNewTask(""); // Clear input after adding task
        }
    };

    // Function to mark task as done
    const markAsDone = (id: number) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    };

    // Function to delete a task
    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <motion.div
            className="md:h-[33rem] h-full w-full mx-auto grid grid-cols-2 gap-4 px-5 md:mt-0 mb-10 md:mb-0 py-3 bg-transparent"
            variants={zoomOutVariants}
            initial="hidden"
            animate="visible"
        >
            <div className='md:h-[31rem] w-full flex flex-col justify-center items-center md:col-span-1 col-span-2'>
                <LabelInputContainer className="flex flex-row w-full justify-center items-center gap-3">
                    <Input id="task" name="task" placeholder="Add a new task" type="text" required className='w-[432px] h-[40px]' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                    <button className='h-[40px] w-[40px] mt-0 rounded-lg justify-center items-center flex bg-[#9E78CF]' onClick={addTask}><Plus color='#fff' /></button>
                </LabelInputContainer>
                <div className='gap-3 mt-4'>
                    <p className='text-white text-start'>Tasks to do - {tasks.filter((task) => !task.done).length}</p>
                    <ScrollArea className='h-[22rem] w-full flex justify-center items-center'>
                        {tasks
                            .filter((task) => !task.done).map((task, index) => {
                                return (
                                    <div key={index} className='bg-[#15101C] h-[75px] w-[480px] rounded-[10px] flex justify-between items-center px-6 my-5'>
                                        <p className='text-[#9E78CF]'>{task.text}</p>
                                        <div className=' flex justify-center items-center flex-row gap-6'>
                                            <Check color='#9E78CF' size={25} onClick={() => markAsDone(task.id)}
                                                className="cursor-pointer" />
                                            <Trash color='#9E78CF' size={20} onClick={() => deleteTask(task.id)}
                                                className="cursor-pointer" />
                                        </div>
                                    </div>
                                )
                            })}
                    </ScrollArea>
                </div>
            </div>
            <div className='md:h-[31rem] w-full flex flex-col justify-center items-center md:col-span-1 col-span-2'>
                <div className='gap-3 mt-4'>
                    <p className='text-white text-start'>Done - {tasks.filter((task) => task.done).length}</p>
                    <ScrollArea className='h-[22rem] w-full flex justify-center items-center'>
                        {tasks
                            .filter((task) => task.done).map((task, index) => {
                                return (
                                    <div key={index} className='bg-[#15101C] h-[75px] w-[480px] rounded-[10px] flex justify-between items-center px-6 my-5'>
                                        <p className='text-[#78CFB0] line-through'>{task.text}</p>
                                    </div>
                                )
                            })}
                    </ScrollArea>
                </div>
            </div>
        </motion.div>
    );
}

export default ToDoApp;
