import './TechBadge.css'

interface TechBadgeProps {
  name: string;
  color?: string;
}

const TechBadge = ({ name, color = '#B6D094' }: TechBadgeProps) => {
  return (
    <span className="tech-badge" style={{ borderColor: color }}>
      {name}
    </span>
  )
}

export default TechBadge