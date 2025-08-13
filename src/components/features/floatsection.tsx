import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatSectionProps {
    children: ReactNode;
}

export function FloatSection({ children }: FloatSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0, ease: 'easeInOut' }}
        >
            {children}
        </motion.div>
    )
}