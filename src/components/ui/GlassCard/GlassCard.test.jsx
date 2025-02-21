// src/components/common/GlassCard/GlassCard.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import GlassCard from './index';

describe('GlassCard', () => {
it('renders children correctly', () => {
    render(<GlassCard>Test Content</GlassCard>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
});

it('applies variant styles correctly', () => {
    const { container } = render(
    <GlassCard variant="project">Test Content</GlassCard>
    );
    expect(container.firstChild).toHaveClass('bg-white/[0.04]');
});

it('handles hover state correctly', () => {
    const { container } = render(
    <GlassCard hover={false}>Test Content</GlassCard>
    );
    expect(container.firstChild).not.toHaveClass('hover:bg-white/[0.06]');
});
});