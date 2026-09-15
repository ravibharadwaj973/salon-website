import { permanentRedirect } from 'next/navigation';

/**
 * The trial used to start itself here. It does not any more — a salon is
 * created by a person, after a conversation — but the old link is on printed
 * cards and in a few inboxes, so it keeps working and lands where it should.
 */
export default function TrialPage(): never {
  permanentRedirect('/demo');
}
