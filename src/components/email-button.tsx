"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

interface EmailButtonProps {
	email?: string;
	className?: string;
}

export default function EmailButton({
	email = "matthew@matthewbodie.com",
	className = "",
}: EmailButtonProps) {
	const [isHovered, setIsHovered] = useState(false);

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(email);
			toast.success("Email copied to clipboard", {
				description: email,
				duration: 3000,
			});
		} catch (error) {
			console.error("Failed to copy email:", error);
			toast.error("Failed to copy email", {
				description: "Please try again",
				duration: 3000,
			});
		}
	};

	return (
		<Button
			variant="outline"
			className={`transition-transform duration-300 ${
				isHovered ? "scale-110" : "scale-100"
			} ${className}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={copyToClipboard}
		>
			<Copy className="mr-2 h-4 w-4" />
			{email}
		</Button>
	);
}
